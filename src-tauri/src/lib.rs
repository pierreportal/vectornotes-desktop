// Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
mod commands;
mod controllers;
mod models;

use crate::commands::handlers::{
    create_note, delete_all_notes, delete_note_by_id, get_note_by_id, get_notes, update_note,
};
use crate::controllers::notecontroller::Database;
use tauri::Manager;
use tauri::{TitleBarStyle, WebviewUrl, WebviewWindowBuilder};

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .plugin(tauri_plugin_opener::init())
        .setup(|app| {
            let win_builder = WebviewWindowBuilder::new(app, "main", WebviewUrl::default())
                .title("Vector Notes")
                .inner_size(1200.0, 800.0);

            // set transparent title bar only when building for macOS
            #[cfg(target_os = "macos")]
            let win_builder = win_builder.title_bar_style(TitleBarStyle::Transparent);
            let window = win_builder.build().unwrap();

            // set background color only when building for macOS
            #[cfg(target_os = "macos")]
            {
                use objc2_app_kit::{NSColor, NSWindow};
                let ns_window_ptr = window.ns_window().unwrap() as *mut NSWindow;
                let ns_window = unsafe { &*ns_window_ptr };
                let bg_color = NSColor::colorWithRed_green_blue_alpha(
                    22.0 / 255.0,
                    31.0 / 255.0,
                    38.0 / 255.0,
                    1.0,
                );
                ns_window.setBackgroundColor(Some(&bg_color));
                ns_window.setAlphaValue(0.95);
            }

            let app_handle = app.handle();
            tauri::async_runtime::block_on(async move {
                let db = Database::new()
                    .await
                    .expect("Failed to initialize database");
                app_handle.manage(db);
            });
            Ok(())
        })
        .invoke_handler(tauri::generate_handler![
            create_note,
            update_note,
            get_note_by_id,
            delete_note_by_id,
            get_notes,
            delete_all_notes
        ])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
