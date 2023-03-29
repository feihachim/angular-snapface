import { Observable, tap } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { FaceSnap } from '../../../core/models/face-snap-model';
import { FaceSnapsService } from '../../../core/services/face-snaps.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-face-snap',
  templateUrl: './single-face-snap.component.html',
  styleUrls: ['./single-face-snap.component.scss'],
})
export class SingleFaceSnapComponent implements OnInit {
  faceSnap!: FaceSnap;
  faceSnap$!: Observable<FaceSnap>;
  buttonText!: string;

  constructor(
    private faceSnapsService: FaceSnapsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.buttonText = 'Oh Snap!';
    const snapId = +this.route.snapshot.params['id'];
    this.faceSnap$ = this.faceSnapsService.getFaceSnapById(snapId);
  }

  onSnap(faceSnapId: number) {
    if (this.buttonText === 'Oh Snap!') {
      this.faceSnap$ = this.faceSnapsService
        .snapFaceSnapById(faceSnapId, 'snap')
        .pipe(tap(() => (this.buttonText = 'Oops, un Snap!')));
    } else {
      this.faceSnap$ = this.faceSnapsService
        .snapFaceSnapById(faceSnapId, 'unsnap')
        .pipe(tap(() => (this.buttonText = 'Oh Snap!')));
    }
  }
}
