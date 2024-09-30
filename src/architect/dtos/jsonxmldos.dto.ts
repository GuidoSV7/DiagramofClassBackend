export interface JSONXML {
    XMI: Xmi;
}

export interface Xmi {
    $:                XMIClass;
    "XMI.header":     XMIHeader[];
    "XMI.content":    XMIContent[];
    "XMI.difference": string[];
    "XMI.extensions": XMIExtensionElement[];
}

export interface XMIClass {
    "xmi.version": string;
    "xmlns:UML":   string;
    timestamp:     Date;
}

export interface XMIContent {
    "UML:Model":   UMLModelElement[];
    "UML:Diagram": UMLDiagramClass[];
}

export interface UMLDiagramClass {
    $:                              UMLDiagram;
    "UML:ModelElement.taggedValue": UMLModelElementTaggedValue[];
    "UML:Diagram.element":          UMLDiagramElementElement[];
}

export interface UMLDiagram {
    name:        string;
    "xmi.id":    string;
    diagramType: string;
    owner:       string;
    toolName:    string;
}

export interface UMLDiagramElementElement {
    "UML:DiagramElement": UMLDiagramElementClass[];
}

export interface UMLDiagramElementClass {
    $: UMLDiagramElement;
}

export interface UMLDiagramElement {
    geometry: string;
    subject:  string;
    seqno:    string;
    style:    string;
}

export interface UMLModelElementTaggedValue {
    "UML:TaggedValue": UMLTaggedValueElement[];
}

export interface UMLTaggedValueElement {
    $: UMLTaggedValue;
}

export interface UMLTaggedValue {
    tag:   string;
    value: string;
}

export interface UMLModelElement {
    $:                            UMLModel;
    "UML:Namespace.ownedElement": UMLModelUMLNamespaceOwnedElement[];
}

export interface UMLModel {
    name:     string;
    "xmi.id": string;
}

export interface UMLModelUMLNamespaceOwnedElement {
    "UML:Class":    UML[];
    "UML:Package":  UMLPackage[];
    "UML:DataType": UML[];
}

export interface UML {
    $: UMLClass;
}

export interface UMLClass {
    name?:       string;
    "xmi.id":    string;
    isRoot:      string;
    isLeaf:      string;
    isAbstract:  string;
    visibility?: Visibility;
    isActive?:   string;
}

export enum Visibility {
    Private = "private",
    Public = "public",
}

export interface UMLPackage {
    $:                              UMLClass;
    "UML:ModelElement.taggedValue": UMLModelElementTaggedValue[];
    "UML:Namespace.ownedElement":   UMLPackageUMLNamespaceOwnedElement[];
}

export interface UMLPackageUMLNamespaceOwnedElement {
    "UML:Class":       UMLClassElement[];
    "UML:Association": UMLAssociation[];
}

export interface UMLAssociation {
    $:                              UMLClass;
    "UML:ModelElement.taggedValue": UMLModelElementTaggedValue[];
    "UML:Association.connection":   UMLAssociationConnection[];
}

export interface UMLAssociationConnection {
    "UML:AssociationEnd": UMLAssociationEndElement[];
}

export interface UMLAssociationEndElement {
    $:                              UMLAssociationEnd;
    "UML:ModelElement.taggedValue": UMLModelElementTaggedValue[];
}

export interface UMLAssociationEnd {
    visibility:    Visibility;
    multiplicity?: string;
    aggregation:   string;
    isOrdered:     string;
    targetScope:   string;
    changeable:    string;
    isNavigable:   string;
    type:          string;
}

export interface UMLClassElement {
    $:                              UMLClass;
    "UML:ModelElement.taggedValue": UMLModelElementTaggedValue[];
    "UML:Classifier.feature":       UMLClassifierFeature[];
}

export interface UMLClassifierFeature {
    "UML:Attribute": UMLAttributeElement[];
}

export interface UMLAttributeElement {
    $:                              UMLAttribute;
    "UML:Attribute.initialValue":   UMLAttributeInitialValue[];
    "UML:StructuralFeature.type":   UMLStructuralFeatureType[];
    "UML:ModelElement.taggedValue": UMLModelElementTaggedValue[];
}

export interface UMLAttribute {
    name:        string;
    changeable:  string;
    visibility:  Visibility;
    ownerScope:  string;
    targetScope: string;
}

export interface UMLAttributeInitialValue {
    "UML:Expression": string[];
}

export interface UMLStructuralFeatureType {
    "UML:Classifier": UMLClassifierElement[];
}

export interface UMLClassifierElement {
    $: UMLClassifier;
}

export interface UMLClassifier {
    "xmi.idref": string;
}

export interface XMIExtensionElement {
    $:                  XMIExtension;
    "EAModel.paramSub": string[];
}

export interface XMIExtension {
    "xmi.extender": string;
}

export interface XMIHeader {
    "XMI.documentation": XMIDocumentation[];
}

export interface XMIDocumentation {
    "XMI.exporter":        string[];
    "XMI.exporterVersion": string[];
}
