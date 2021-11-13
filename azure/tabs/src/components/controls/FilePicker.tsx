import React from "react";
import { initializeIcons } from '@fluentui/react';
import { PrimaryButton, IconButton } from '@fluentui/react/lib/Button';
import { DetailsList, DetailsListLayoutMode, SelectionMode, IColumn } from '@fluentui/react/lib/DetailsList';
import { mergeStyleSets } from '@fluentui/react/lib/Styling';
import { TooltipHost } from '@fluentui/react';
import IFilePickerProps from "./../../interfaces/IFilePickerProps";
import { initializeThemeInCustomizations } from "@fluentui/style-utilities/lib/styles/theme";


class FilePicker extends React.Component<IFilePickerProps> {
  constructor(props: IFilePickerProps) {    
    super(props);
    initializeIcons();
  }

  private onFileAdded = (ev?: React.ChangeEvent<HTMLInputElement>): void => {
        
    const newFiles:FileList|undefined|null = ev?.target.files;

    if ((this.props.onChange === undefined) || (newFiles === null) || (newFiles === undefined)) {
      return;
    }    

    const existingFiles = (this.props.files === undefined) ? [] : this.props.files;
      
    for (var index = 0; index < newFiles!.length; index++) {
      existingFiles.push(newFiles[index]);
    }

    this.props.onChange(existingFiles);
  }

  private onFileRemoved = (removedFile: File) => {  
    if ((this.props.onChange === undefined) || (this.props.files === null) || (this.props.files === undefined)) {
      return;
    }

    const files:File[] = this.props.files!;
    const fileIndex = files.findIndex(file => { return file.name === removedFile.name && file.size === removedFile.size && file.lastModified === removedFile.lastModified});

    if (fileIndex === -1) {
      return;
    }

    files.splice(fileIndex, 1);
    this.props.onChange(files);
    
  }
  
  render() {

    //const pickerId = `file${new Date().getTime()}`
    const fileInput:React.RefObject<HTMLInputElement> = React.createRef<HTMLInputElement>();

    const fileColumns: IColumn[] = [
      // {
      //   key: 'column1',
      //   name: 'File Type',
      //   className: classNames.fileIconCell,
      //   iconClassName: classNames.fileIconHeaderIcon,
      //   ariaLabel: 'Column operations for File type, Press to sort on File type',
      //   iconName: 'Page',
      //   isIconOnly: true,
      //   fieldName: 'name',
      //   minWidth: 16,
      //   maxWidth: 16,
      //   onColumnClick: this._onColumnClick,
      //   onRender: (item: IDocument) => (
      //     <TooltipHost content={`${item.fileType} file`}>
      //       <img src={item.iconName} className={classNames.fileIconImg} alt={`${item.fileType} file icon`} />
      //     </TooltipHost>
      //   ),
      // },
      {
        key: 'fileNameColumn',
        name: 'Name',
        fieldName: 'name',
        minWidth: 210,
        maxWidth: 350,
        isRowHeader: true,
        isResizable: true,
        isSorted: false,
        isSortedDescending: false,
        sortAscendingAriaLabel: 'Sorted A to Z',
        sortDescendingAriaLabel: 'Sorted Z to A',
        //onColumnClick: this._onColumnClick,
        data: 'string',
        isPadded: true,
      },
      {
        key: 'fileActionsColumn',
        name: 'Remove File',
        //className: classNames.fileIconCell,
        //iconClassName: classNames.fileIconHeaderIcon,
        ariaLabel: 'Column operations for File type, Press to sort on File type',
        iconName: 'Delete',
        isIconOnly: true,        
        minWidth: 16,
        maxWidth: 16,
        //onColumnClick: this._onColumnClick,
        onRender: (file: File) => (
          <TooltipHost content={`Remove ${file.name}`}>
            <IconButton iconProps={{ iconName: 'Delete'}} title="Navigate Back to Previous Screen" ariaLabel="Navigate Back to Previous Screen" onClick={(e) => this.onFileRemoved(file)} />
          </TooltipHost>
        ),
      }
    ];


    return (
      <div>
        <span style={{ display: 'none' }}><input title="hiddenFilePicker" type="file" multiple onChange={this.onFileAdded} ref={fileInput}></input></span>
        

        <PrimaryButton onClick={() => fileInput.current!.click()}>{this.props.label}</PrimaryButton>
        {
          !this.props.label && this.props.required &&
          <span>*</span>
        }
        {
          this.props.files !== undefined && this.props.files.length !== 0 &&        
          <DetailsList
            items={this.props.files!}
            compact={true}
            columns={fileColumns}
            selectionMode={SelectionMode.none}
            //getKey={this._getKey}
            setKey="none"
            layoutMode={DetailsListLayoutMode.justified}
            isHeaderVisible={true}
            //onItemInvoked={this._onItemInvoked}
          />
        }
      </div>
    );
  }
}

export default FilePicker;
