
export class Perdson{
  id_pers_1: number = 0;
  id_pers_2: number = 0;
  annotation_data: JSON;
  TenFramesName: string;
  TenFramesNum: number = 0;

  constructor(file: JSON,frame: string) { 
    this.annotation_data = file;
    this.id_pers_1 = file["id"];
  }
  setTenFrame(numFrame: number, nameFrame: string) {
    this.TenFramesName = nameFrame;
    this.TenFramesNum = numFrame;
  }
  getPersonJson() {
    return { ten_frames_num: this.TenFramesNum, ten_frames_name: this.TenFramesName }
  }
}
