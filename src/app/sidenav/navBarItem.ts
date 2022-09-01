import { IconDefinition ,faHouse} from "@fortawesome/free-solid-svg-icons";

export interface NavBarItem{
  label:string;
  routerLink:string ;
  icon:IconDefinition;
  expanded:boolean ;
  items:NavBarItem[];


}
