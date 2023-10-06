import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-drag-and-drop',
  templateUrl: './drag-and-drop.component.html',
  styleUrls: ['./drag-and-drop.component.css']
})
export class DragAndDropComponent {
  selectedFileName: string | null = null;
  selectedFileSize: string = ''; 
  constructor(private el: ElementRef) {}

  selectFile() {
    const fileInput = this.el.nativeElement.querySelector('#file-input');
    if (fileInput) {
      fileInput.click();
    }
  }

  onFileSelected(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    if (inputElement.files && inputElement.files.length > 0) {
        const file = inputElement.files[0];
        this.selectedFileName = file.name;
        this.selectedFileSize = this.formatFileSize(file.size); // Calculate and set file size
        console.log('Selected File:', file);
    }
}

private formatFileSize(size: number): string {
    if (size >= 1024 * 1024) {
        return (size / (1024 * 1024)).toFixed(2) + ' MB';
    } else if (size >= 1024) {
        return (size / 1024).toFixed(2) + ' KB';
    } else {
        return size + ' bytes';
    }
}
  
  private handleSelectedFile(file: File) {
    // Handle the selected file, e.g., display its name or other information
    console.log('Selected file:', file.name);
  }
  
}
