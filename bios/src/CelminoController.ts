import { ForEach, Fragment, Text, UIController, UIRouteClass, UIView, UIViewBuilder, VStack } from "@tuval/forms";
import { WaitViewClass } from "./views/WaitViewClass";
import { is } from "@tuval/core";



export function Guard(...args: Function[]) {
    return function GuardClassConstructor<T extends { new(...args: any[]): {} }>(constructor: T) {
        return class extends constructor {
            public GetDepends() {
                const deps = args.map(arg => arg());
                return deps;
            }
        }
    }
}

export class CelminoController extends UIController {
    LoadViewInternal(): UIView {
        let wait = false;
        const result: UIView[] = is.function((this as any).GetDepends) ? (this as any).GetDepends() : [];

        for (let i = 0; i < result.length; i++) {
            if (result[i] instanceof WaitViewClass) {
                wait = true;
            } else if (result[i] instanceof UIRouteClass) {
                return result[i];
            }
        }

        return UIViewBuilder(() => {
            return (
                VStack(
                    ...ForEach(result)(item => item),
                    wait ? Fragment() : this.LoadView()
                )
            )
        })
    }

}

