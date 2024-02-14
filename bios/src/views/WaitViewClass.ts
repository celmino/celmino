import { UIView } from "@tuval/forms";


export class WaitViewClass extends UIView {

}

export class ReleaseViewClass extends UIView {

}

export const Wait = () => (new WaitViewClass())
export const Release = () => (new ReleaseViewClass())