import { Injectable } from '@nestjs/common';
import { v4 as uuidv44 } from 'uuid';


@Injectable()
export class ArchitectService {
  
  jsonToXml(json: any): string {
    
    let xml = '<?xml version="1.0" encoding="windows-1252"?>\n';
    xml += '<XMI xmi.version="1.1" xmlns:UML="omg.org/UML1.3" timestamp="2024-09-10 13:39:27">\n';
    xml += '  <XMI.header>\n';
    xml += '    <XMI.documentation>\n';
    xml += '      <XMI.exporter>Enterprise Architect</XMI.exporter>\n';
    xml += '      <XMI.exporterVersion>2.5</XMI.exporterVersion>\n';
    xml += '    </XMI.documentation>\n';
    xml += '  </XMI.header>\n';
    xml += '  <XMI.content>\n';
    xml += '    <UML:Model name="EA Model" xmi.id="MX_EAID_8797B583_9093_4e98_8B87_124ED5122EC6">\n';
    xml += '      <UML:Namespace.ownedElement>\n';
    xml += '        <UML:Class name="EARootClass" xmi.id="EAID_11111111_5487_4080_A7F4_41526CB0AA00" isRoot="true" isLeaf="false" isAbstract="false"/>\n';
    xml += '        <UML:Package name="Package1" xmi.id="EAPK_8797B583_9093_4e98_8B87_124ED5122EC6" isRoot="false" isLeaf="false" isAbstract="false" visibility="public">\n';
    xml += '          <UML:ModelElement.taggedValue>\n';
    xml += '            <UML:TaggedValue tag="parent" value="EAPK_FD541697_D4F3_424d_95D5_2ECE21C3FB62"/>\n';
    xml += '            <UML:TaggedValue tag="ea_package_id" value="2"/>\n';
    xml += '            <UML:TaggedValue tag="created" value="2022-10-26 17:05:32"/>\n';
    xml += '            <UML:TaggedValue tag="modified" value="2022-10-26 17:05:32"/>\n';
    xml += '            <UML:TaggedValue tag="iscontrolled" value="FALSE"/>\n';
    xml += '            <UML:TaggedValue tag="version" value="1.0"/>\n';
    xml += '            <UML:TaggedValue tag="isprotected" value="FALSE"/>\n';
    xml += '            <UML:TaggedValue tag="usedtd" value="FALSE"/>\n';
    xml += '            <UML:TaggedValue tag="logxml" value="FALSE"/>\n';
    xml += '            <UML:TaggedValue tag="packageFlags" value="isModel=1;VICON=3;CRC=0;"/>\n';
    xml += '            <UML:TaggedValue tag="phase" value="1.0"/>\n';
    xml += '            <UML:TaggedValue tag="status" value="Proposed"/>\n';
    xml += '            <UML:TaggedValue tag="author" value="ASUS"/>\n';
    xml += '            <UML:TaggedValue tag="complexity" value="1"/>\n';
    xml += '            <UML:TaggedValue tag="ea_stype" value="Public"/>\n';
    xml += '            <UML:TaggedValue tag="tpos" value="0"/>\n';
    xml += '            <UML:TaggedValue tag="gentype" value="Java"/>\n';
    xml += '          </UML:ModelElement.taggedValue>\n';
    xml += '          <UML:Namespace.ownedElement>\n';
    xml += this.convertObjectToXml(json, '            ');
    xml += '      </UML:Namespace.ownedElement>\n';
    xml += '    </UML:Package>\n';

    xml += this.generateDataTypes(json, '      ');

    xml += '   </UML:Namespace.ownedElement>\n';
    xml += '    </UML:Model>\n';
    xml += '    <UML:Diagram name="Diagrama de Clase" xmi.id="EAID_883FA1B3_31F6_45ad_9A2C_2C0B096D1421" diagramType="ClassDiagram" owner="EAPK_8797B583_9093_4e98_8B87_124ED5122EC6" toolName="Enterprise Architect 2.5">\n';
    xml += '      <UML:ModelElement.taggedValue>\n';
    xml += '        <UML:TaggedValue tag="version" value="1.0"/>\n';
    xml += '        <UML:TaggedValue tag="author" value="ASUS"/>\n';
    xml += '        <UML:TaggedValue tag="created_date" value="2024-09-10 13:07:11"/>\n';
    xml += '        <UML:TaggedValue tag="modified_date" value="2024-09-10 13:31:30"/>\n';
    xml += '        <UML:TaggedValue tag="package" value="EAPK_8797B583_9093_4e98_8B87_124ED5122EC6"/>\n';
    xml += '        <UML:TaggedValue tag="type" value="Logical"/>\n';
    xml += '        <UML:TaggedValue tag="swimlanes" value="locked=false;orientation=0;width=0;inbar=false;names=false;color=-1;bold=false;fcol=0;tcol=-1;ofCol=-1;ufCol=-1;hl=0;ufh=0;hh=0;cls=0;bw=0;hli=0;SwimlaneFont=lfh:-10,lfw:0,lfi:0,lfu:0,lfs:0,lfface:Noto Sans,lfe:0,lfo:0,lfchar:1,lfop:0,lfcp:0,lfq:0,lfpf=0,lfWidth=0;"/>\n';
    xml += '        <UML:TaggedValue tag="matrixitems" value="locked=false;matrixactive=false;swimlanesactive=true;kanbanactive=false;width=1;clrLine=0;"/>\n';
    xml += '        <UML:TaggedValue tag="ea_localid" value="2"/>\n';
    xml += '        <UML:TaggedValue tag="EAStyle" value="ShowPrivate=1;ShowProtected=1;ShowPublic=1;HideRelationships=0;Locked=0;Border=1;HighlightForeign=1;PackageContents=1;SequenceNotes=0;ScalePrintImage=0;PPgs.cx=0;PPgs.cy=0;DocSize.cx=827;DocSize.cy=1169;ShowDetails=0;Orientation=P;Zoom=100;ShowTags=0;OpParams=1;VisibleAttributeDetail=0;ShowOpRetType=1;ShowIcons=1;CollabNums=0;HideProps=0;ShowReqs=0;ShowCons=0;PaperSize=9;HideParents=0;UseAlias=0;HideAtts=0;HideOps=0;HideStereo=0;HideElemStereo=0;ShowTests=0;ShowMaint=0;ConnectorNotation=UML 2.1;ExplicitNavigability=0;ShowShape=1;AllDockable=0;AdvancedElementProps=1;AdvancedFeatureProps=1;AdvancedConnectorProps=1;m_bElementClassifier=1;SPT=1;ShowNotes=0;SuppressBrackets=0;SuppConnectorLabels=0;PrintPageHeadFoot=0;ShowAsList=0;"/>\n';
    xml += '        <UML:TaggedValue tag="styleex" value="SaveTag=CDB1A339;ExcludeRTF=0;DocAll=0;HideQuals=0;AttPkg=1;ShowTests=0;ShowMaint=0;SuppressFOC=1;MatrixActive=0;SwimlanesActive=1;KanbanActive=0;MatrixLineWidth=1;MatrixLineClr=0;MatrixLocked=0;TConnectorNotation=UML 2.1;TExplicitNavigability=0;AdvancedElementProps=1;AdvancedFeatureProps=1;AdvancedConnectorProps=1;m_bElementClassifier=1;SPT=1;MDGDgm=;STBLDgm=;ShowNotes=0;VisibleAttributeDetail=0;ShowOpRetType=1;SuppressBrackets=0;SuppConnectorLabels=0;PrintPageHeadFoot=0;ShowAsList=0;SuppressedCompartments=;Theme=:119;"/>\n';
    xml += '      </UML:ModelElement.taggedValue>\n';

    xml += this.convertObjectDiagramElementToXml(json, '            ');
    xml += '  </UML:Diagram>\n';
    xml += '  </XMI.content>\n';
    xml += '  <XMI.difference/>\n';
    xml += '  <XMI.extensions xmi.extender="Enterprise Architect 2.5">\n';
    xml += '    <EAModel.paramSub/>\n';
    xml += '  </XMI.extensions>\n';
    xml += '</XMI>\n';
  
    return xml;
  }
  convertObjectDiagramElementToXml(json: any, indent: string = '      '): string {
    let xml = `${indent}<UML:Diagram.element>\n`;
    let seqno = 1;
  
    json.cells.forEach((cell: any, index: number) => {
      if (cell.type === 'app.Table') {
        const x = cell.position.x;
        const y = cell.position.y;
        const width = cell.size.width;
        const height = cell.size.height;
        
        const left = x; 
        const top = y; 
        const right = x + width; 
        const bottom = y + height; 
        
        xml += `${indent}  <UML:DiagramElement geometry="Left=${left};Top=${top};Right=${right};Bottom=${bottom};" subject="${cell.id}" seqno="${seqno}" style="DUID=F5F540DB;"/>\n`;
        seqno++;
      }
    });
  
    xml += `${indent}</UML:Diagram.element>\n`;
    
    return xml;



  }

  private generateDataTypes(json: any, indent: string = '      '): string {
    let xml = '';
    const tableCount = json.cells.filter((cell: any) => cell.type === 'app.Table').length;
  
    for (let i = 0; i < tableCount; i++) {
      xml += `${indent}<UML:DataType xmi.id="eaxmiid${i}" name="datatype${i}" visibility="private" isRoot="false" isLeaf="false" isAbstract="false"/>\n`;
    }
  
    
    return xml;

  }

  
  private convertObjectToXml(obj: any, indent: string = ''): string {
    let xml = '';
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        const value = obj[key];
        if (Array.isArray(value)) {
          value.forEach((item) => {
            if (item.type === 'app.Table') {
              xml += this.convertTableToXml(item, indent);
            } else if (item.type === 'standard.Link') {
              xml += this.convertLinkToXml(item, indent);
            } else {
              xml += `${indent}<${key}>\n`;
              xml += this.convertObjectToXml(item, indent + '  ');
              xml += `${indent}</${key}>\n`;
            }
          });
        } else if (typeof value === 'object' && value !== null) {
          xml += `${indent}<${key}>\n`;
          xml += this.convertObjectToXml(value, indent + '  ');
          xml += `${indent}</${key}>\n`;
        } else if (value !== null) {
          xml += `${indent}<${key}>${value}</${key}>\n`;
        } else {
          xml += `${indent}<${key}/>\n`; // Manejar el caso de null
        }
      }
    }
    return xml;
  }


  
  private convertTableToXml(table: any, indent: string): string {
    let xml = `${indent}<UML:Class name="${table.attrs.headerLabel.text}" xmi.id="${table.id}" visibility="public" isRoot="false" isLeaf="false" isAbstract="false" isActive="false">\n`;
    xml += `${indent}  <UML:ModelElement.taggedValue>\n`;
    xml += `${indent}    <UML:TaggedValue tag="isSpecification" value="false"/>\n`;
    xml += `${indent}    <UML:TaggedValue tag="ea_stype" value="Class"/>\n`;
    xml += `${indent}    <UML:TaggedValue tag="ea_ntype" value="0"/>\n`;
    xml += `${indent}    <UML:TaggedValue tag="version" value="1.0"/>\n`;
    xml += `${indent}    <UML:TaggedValue tag="package" value="EAPK_8797B583_9093_4e98_8B87_124ED5122EC6"/>\n`;
    xml += `${indent}    <UML:TaggedValue tag="date_created" value="2024-09-10 13:10:02"/>\n`;
    xml += `${indent}    <UML:TaggedValue tag="date_modified" value="2024-09-10 13:10:13"/>\n`;
    xml += `${indent}    <UML:TaggedValue tag="gentype" value="Java"/>\n`;
    xml += `${indent}    <UML:TaggedValue tag="tagged" value="0"/>\n`;
    xml += `${indent}    <UML:TaggedValue tag="package_name" value="Package1"/>\n`;
    xml += `${indent}    <UML:TaggedValue tag="phase" value="1.0"/>\n`;
    xml += `${indent}    <UML:TaggedValue tag="author" value="ASUS"/>\n`;
    xml += `${indent}    <UML:TaggedValue tag="complexity" value="1"/>\n`;
    xml += `${indent}    <UML:TaggedValue tag="product_name" value="Java"/>\n`;
    xml += `${indent}    <UML:TaggedValue tag="status" value="Proposed"/>\n`;
    xml += `${indent}    <UML:TaggedValue tag="tpos" value="0"/>\n`;
    xml += `${indent}    <UML:TaggedValue tag="ea_localid" value="5"/>\n`;
    xml += `${indent}    <UML:TaggedValue tag="ea_eleType" value="element"/>\n`;
    xml += `${indent}    <UML:TaggedValue tag="style" value="BackColor=-1;BorderColor=-1;BorderWidth=-1;FontColor=-1;VSwimLanes=1;HSwimLanes=1;BorderStyle=0;"/>\n`;
    xml += `${indent}  </UML:ModelElement.taggedValue>\n`;
  
    xml += `${indent}  <UML:Classifier.feature>\n`;
    table.columns.forEach((column: any, index: number) => {
      
      xml += `${indent}    <UML:Attribute name="${column.name}" changeable="none" visibility="public" ownerScope="instance" targetScope="instance">\n`;
      xml += `${indent}      <UML:Attribute.initialValue>\n`;
      xml += `${indent}        <UML:Expression/>\n`;
      xml += `${indent}      </UML:Attribute.initialValue>\n`;
      
      xml += `${indent}      <UML:StructuralFeature.type>\n`;
      xml += `${indent}        <UML:Classifier xmi.idref="eaxmiid${index}"/>\n`;
      xml += `${indent}      </UML:StructuralFeature.type>\n`;
      xml += `${indent}      <UML:ModelElement.taggedValue>\n`;
      xml += `${indent}        <UML:TaggedValue tag="type" value="${column.type}"/>\n`;
      xml += `${indent}        <UML:TaggedValue tag="containment" value="Not Specified"/>\n`;
      xml += `${indent}        <UML:TaggedValue tag="ordered" value="0"/>\n`;
      xml += `${indent}        <UML:TaggedValue tag="static" value="0"/>\n`;
      xml += `${indent}        <UML:TaggedValue tag="collection" value="false"/>\n`;
      xml += `${indent}        <UML:TaggedValue tag="position" value="${index}"/>\n`;
      xml += `${indent}        <UML:TaggedValue tag="lowerBound" value="1"/>\n`;
      xml += `${indent}        <UML:TaggedValue tag="upperBound" value="1"/>\n`;
      xml += `${indent}        <UML:TaggedValue tag="duplicates" value="0"/>\n`;
      xml += `${indent}        <UML:TaggedValue tag="ea_guid" value="${uuidv44()}"/>\n`;
      xml += `${indent}        <UML:TaggedValue tag="ea_localid" value="${index + 1}"/>\n`;
      xml += `${indent}        <UML:TaggedValue tag="styleex" value="volatile=0;"/>\n`;
      xml += `${indent}      </UML:ModelElement.taggedValue>\n`;
      xml += `${indent}    </UML:Attribute>\n`;
     
    });
    xml += `${indent}  </UML:Classifier.feature>\n`;
    xml += `${indent}</UML:Class>\n`;

    
    return xml;
  }
  private convertLinkToXml(link: any, indent: string): string {
    let xml = `${indent}<UML:Association xmi.id="${link.id}" visibility="public" isRoot="false" isLeaf="false" isAbstract="false">\n`;
    xml += `${indent}  <UML:ModelElement.taggedValue>\n`;
    xml += `${indent}    <UML:TaggedValue tag="style" value="3"/>\n`;
    xml += `${indent}    <UML:TaggedValue tag="ea_type" value="Association"/>\n`;
    xml += `${indent}    <UML:TaggedValue tag="direction" value="Unspecified"/>\n`;
    xml += `${indent}    <UML:TaggedValue tag="linemode" value="3"/>\n`;
    xml += `${indent}    <UML:TaggedValue tag="linecolor" value="-1"/>\n`;
    xml += `${indent}    <UML:TaggedValue tag="linewidth" value="0"/>\n`;
    xml += `${indent}    <UML:TaggedValue tag="seqno" value="0"/>\n`;
    xml += `${indent}    <UML:TaggedValue tag="headStyle" value="0"/>\n`;
    xml += `${indent}    <UML:TaggedValue tag="lineStyle" value="0"/>\n`;
    xml += `${indent}    <UML:TaggedValue tag="ea_localid" value="5"/>\n`;
    xml += `${indent}    <UML:TaggedValue tag="ea_sourceName" value="${link.source.id}"/>\n`;
    xml += `${indent}    <UML:TaggedValue tag="ea_targetName" value="${link.target.id}"/>\n`;
    xml += `${indent}    <UML:TaggedValue tag="ea_sourceType" value="Class"/>\n`;
    xml += `${indent}    <UML:TaggedValue tag="ea_targetType" value="Class"/>\n`;
    xml += `${indent}    <UML:TaggedValue tag="ea_sourceID" value="4"/>\n`;
    xml += `${indent}    <UML:TaggedValue tag="ea_targetID" value="5"/>\n`;
    xml += `${indent}    <UML:TaggedValue tag="virtualInheritance" value="0"/>\n`;
    
    if (link.attrs.line.type === 'none') {
      xml += `${indent}    <UML:TaggedValue tag="lb" value="${link.labels[0].attrs.text.text}"/>\n`;
      xml += `${indent}    <UML:TaggedValue tag="rb" value="${link.labels[1].attrs.text.text}"/>\n`;
    }

    xml += `${indent}  </UML:ModelElement.taggedValue>\n`;
    xml += `${indent}  <UML:Association.connection>\n`;

    if (link.attrs.line.type === 'none') {
      xml += `${indent}    <UML:AssociationEnd visibility="public" multiplicity="${link.labels[0].attrs.text.text}" aggregation="none" isOrdered="false" targetScope="instance" changeable="none" isNavigable="true" type="${link.source.id}">\n`;
    }else{

      xml += `${indent}    <UML:AssociationEnd visibility="public"  aggregation="none" isOrdered="false" targetScope="instance" changeable="none" isNavigable="true" type="${link.source.id}">\n`;
    }
   
    xml += `${indent}      <UML:ModelElement.taggedValue>\n`;
    xml += `${indent}        <UML:TaggedValue tag="containment" value="Unspecified"/>\n`;
    xml += `${indent}        <UML:TaggedValue tag="sourcestyle" value="Union=0;Derived=0;AllowDuplicates=0;Owned=0;Navigable=Unspecified;"/>\n`;
    xml += `${indent}        <UML:TaggedValue tag="ea_end" value="source"/>\n`;
    xml += `${indent}      </UML:ModelElement.taggedValue>\n`;
    xml += `${indent}    </UML:AssociationEnd>\n`;
    if (link.attrs.line.type === 'none') {
      xml += `${indent}    <UML:AssociationEnd visibility="public" multiplicity="${link.labels[1].attrs.text.text}" aggregation="none" isOrdered="false" targetScope="instance" changeable="none" isNavigable="true" type="${link.target.id}">\n`;
    }else{
      xml += `${indent}    <UML:AssociationEnd visibility="public"  aggregation="${link.attrs.line.type}" isOrdered="false" targetScope="instance" changeable="none" isNavigable="true" type="${link.target.id}">\n`;
    }
    
    xml += `${indent}      <UML:ModelElement.taggedValue>\n`;
    xml += `${indent}        <UML:TaggedValue tag="containment" value="Unspecified"/>\n`;
    xml += `${indent}        <UML:TaggedValue tag="deststyle" value="Union=0;Derived=0;AllowDuplicates=0;Owned=0;Navigable=Unspecified;"/>\n`;
    xml += `${indent}        <UML:TaggedValue tag="ea_end" value="target"/>\n`;
    xml += `${indent}      </UML:ModelElement.taggedValue>\n`;
    xml += `${indent}    </UML:AssociationEnd>\n`;
    xml += `${indent}  </UML:Association.connection>\n`;
    xml += `${indent}</UML:Association>\n`;
 
    return xml;
  }

 
}