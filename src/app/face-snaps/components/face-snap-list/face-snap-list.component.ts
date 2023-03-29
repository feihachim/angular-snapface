import { Component, OnInit, OnDestroy } from '@angular/core';
import { FaceSnapsService } from '../../../core/services/face-snaps.service';
import { FaceSnap } from '../../../core/models/face-snap-model';
import { Subject, Observable } from 'rxjs';

@Component({
  selector: 'app-face-snap-list',
  templateUrl: './face-snap-list.component.html',
  styleUrls: ['./face-snap-list.component.scss'],
})
export class FaceSnapListComponent implements OnInit, OnDestroy {
  faceSnaps$!: Observable<FaceSnap[]>;
  //faceSnaps!: FaceSnap[];

  constructor(private faceSnapsService: FaceSnapsService) {}

  ngOnInit(): void {
    this.faceSnaps$ = this.faceSnapsService.getAllFaceSnaps();
  }

  ngOnDestroy(): void {}
}
