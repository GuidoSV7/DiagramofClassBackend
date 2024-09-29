export interface CreateJsonDto {
  cells: Cell[];
}

export interface Cell {
  type:                   string;
  columns?:               Column[];
  padding?:               Padding;
  size?:                  Size;
  itemMinLabelWidth?:     number;
  itemHeight?:            number;
  itemOffset?:            number;
  itemOverflow?:          boolean;
  itemAboveViewSelector?: string;
  itemBelowViewSelector?: string;
  scrollTop?:             null;
  itemButtonSize?:        number;
  itemIcon?:              ItemIcon;
  position?:              Position;
  angle?:                 number;
  id:                     string;
  z:                      number;
  attrs:                  CellAttrs;
  source?:                Source;
  target?:                Source;
  labels?:                Label[];
}

export interface CellAttrs {
  headerLabel?: HeaderLabel;
  line?:        Line;
}

export interface HeaderLabel {
  text: string;
}

export interface Line {
  stroke:       string;
  targetMarker: TargetMarker;
  type:         string;
}

export interface TargetMarker {
  d: string;
}

export interface Column {
  name: string;
  type: string;
}

export interface ItemIcon {
  width:   number;
  height:  number;
  padding: number;
}

export interface Label {
  position: number;
  attrs:    LabelAttrs;
}

export interface LabelAttrs {
  text: Text;
  rect: Rect;
}

export interface Rect {
  fill:        string;
  stroke:      string;
  strokeWidth: number;
  rx:          number;
  ry:          number;
}

export interface Text {
  text:       string;
  fill:       string;
  fontSize:   number;
  fontFamily: string;
  fontWeight: string;
  textAnchor: string;
  yAlignment: string;
}

export interface Padding {
  top:    number;
  bottom: number;
  left:   number;
  right:  number;
}

export interface Position {
  x: number;
  y: number;
}

export interface Size {
  width:  number;
  height: number;
}

export interface Source {
  id: string;
}
