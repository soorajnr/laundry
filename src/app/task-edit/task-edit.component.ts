
import { Component, ElementRef, ViewChild } from '@angular/core';
import SignaturePad from 'signature_pad';
interface FileAttributes {
  fileAttr1: string;
  fileAttr2: string;
}

@Component({
  selector: 'app-task-edit',
  templateUrl: './task-edit.component.html',
  styleUrls: ['./task-edit.component.scss']
})
export class TaskEditComponent {
  @ViewChild('signatureCanvas1', { static: true }) signatureCanvas1!: ElementRef<HTMLCanvasElement>;
  @ViewChild('signatureCanvas2', { static: true }) signatureCanvas2!: ElementRef<HTMLCanvasElement>;
  @ViewChild('fileInput1') fileInput1!: ElementRef;
  @ViewChild('fileInput2') fileInput2!: ElementRef;
  fileAttr1 = 'Choose File';
  fileAttr2 = 'Choose File';

  uploadFileEvt1(event: any) {
    this.updateFileAttr('fileAttr1', event.target.files);
  }

  uploadFileEvt2(event: any) {
    this.updateFileAttr('fileAttr2', event.target.files);
  }

  private updateFileAttr(property: keyof FileAttributes, files: FileList | null) {
    if (files && files.length > 0) {
      this[property] = '';
      Array.from(files).forEach((file: any) => {
        this[property] += file.name + ' - ';
      });

      // Rest of your file processing logic
    } else {
      this[property] = 'Choose File';
    }
  }

  signaturePad1!: SignaturePad;
  signaturePad2!: SignaturePad;

  constructor() {}

ngAfterViewInit() {
  const canvas1 = this.signatureCanvas1.nativeElement;
  const canvas2 = this.signatureCanvas2.nativeElement;

  const options = {
    backgroundColor: 'rgb(255, 255, 255)',
    penColor: 'black',
    // Add the ratio option here:
    ratio: 2 // Adjust this value based on your needs
  };
  this.signaturePad1 = new SignaturePad(canvas1, options);
  this.signaturePad2 = new SignaturePad(canvas2, options);
}

clearSignature(signaturePad: SignaturePad) {
  signaturePad.clear();
}



saveDetails(){
  // first save signature
  const dataURL1 = this.signaturePad1.toDataURL();
  const dataURL2 = this.signaturePad2.toDataURL();

  if (this.signaturePad1.isEmpty() && this.signaturePad2.isEmpty()) {
    console.log('No signatures to save.');
  } else {
    console.log('Signature 1 saved:', dataURL1);
    console.log('Signature 2 saved:', dataURL2);
  }
  // end save signature
}

}
