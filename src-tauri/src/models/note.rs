use serde::{Deserialize, Serialize};
use surrealdb::RecordId;

#[derive(Debug, Serialize, Deserialize)]
pub struct Note {
    pub title: String,
    pub content: String,
    pub tags: Vec<String>,
    pub status: String,
    pub notebook: String,
    pub pinned: bool,
    // add timestamp and other necessary fields
}

#[derive(Debug, Deserialize, Serialize)]
pub struct Record {
    #[allow(dead_code)]
    pub id: RecordId,
}

#[derive(Debug, Deserialize, Serialize)]
pub struct NoteRecord {
    #[allow(dead_code)]
    pub id: RecordId,
    pub title: String,
    pub content: String,
    pub tags: Vec<String>,
    pub status: String,
    pub notebook: String,
    pub pinned: bool,
}
