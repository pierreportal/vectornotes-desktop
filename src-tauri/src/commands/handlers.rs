use crate::controllers::notecontroller::Database;
use crate::models::note::NoteRecord;
use tauri::State;

#[tauri::command]
pub async fn create_note(
    db: State<'_, Database>,
    title: String,
    content: String,
    tags: Vec<String>,
    status: String,
    notebook: String,
    pinned: bool,
) -> Result<String, String> {
    db.create_note(title, content, tags, status, notebook, pinned)
        .await
        .map(|new_note| new_note.unwrap().id.to_string())
        .map_err(|e| e.to_string())
}

#[tauri::command]
pub async fn update_note(
    db: State<'_, Database>,
    id: String,
    title: String,
    content: String,
) -> Result<String, String> {
    db.update_note(id, title, content)
        .await
        .map(|new_note| new_note.unwrap().id.to_string())
        .map_err(|e| e.to_string())
}

#[tauri::command]
pub async fn get_note_by_id(db: State<'_, Database>, id: String) -> Result<NoteRecord, String> {
    db.get_note_by_id(id)
        .await
        .map(|note| note.unwrap())
        .map_err(|e| e.to_string())
}

#[tauri::command]
pub async fn get_notes(db: State<'_, Database>) -> Result<Vec<NoteRecord>, String> {
    match db.get_notes().await {
        Ok(notes) => Ok(notes),
        Err(e) => Err(e.to_string()),
    }
}

#[tauri::command]
pub async fn delete_note_by_id(db: State<'_, Database>, id: String) -> Result<String, String> {
    match db.delete_note_by_id(id).await {
        Ok(_) => Ok("Note deleted successfully".to_string()),
        Err(e) => Err(e.to_string()),
    }
}

#[tauri::command]
pub async fn delete_all_notes(db: State<'_, Database>) -> Result<String, String> {
    match db.delete_all_notes().await {
        Ok(_) => Ok("All notes deleted successfully".to_string()),
        Err(e) => Err(e.to_string()),
    }
}
