import { Component, OnInit} from '@angular/core';
import { RoomType } from 'src/app/models/room-type';
import { RoomTypeService } from 'src/app/services/RoomTypeService/room-type.service';


@Component({
  selector: 'room-types',
  templateUrl: './room-types.component.html',
  styleUrls: ['./room-types.component.css']
})
export class RoomTypesComponent implements OnInit {
  roomTypes: RoomType[]=[];
  selectedRoomType!: RoomType;

  constructor(private roomTypeService: RoomTypeService) { }

  ngOnInit(): void {
    this.getAllRoomTypes();
  }

  getAllRoomTypes(): void {
    this.roomTypeService.getAllRoomTypes()
      .subscribe(roomTypes => this.roomTypes = roomTypes);
  }

  getRoomTypeById(id: number): void {
    this.roomTypeService.getRoomTypeById(id)
      .subscribe(roomType => this.selectedRoomType = roomType);
  }
  roomTypesImages = [
    "assets/room-photos/standart-room.jpg",
    "assets/room-photos/family-room.jpg",
    "assets/room-photos/suites-room.jpg",
    "assets/room-photos/vip-room.jpg"
];
}
