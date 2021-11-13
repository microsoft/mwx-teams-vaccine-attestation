import React from "react";
import { initializeIcons } from '@fluentui/react';
import { DetailsList, DetailsListLayoutMode, Selection, IColumn } from '@fluentui/react/lib/DetailsList';
import { mergeStyles, mergeStyleSets } from '@fluentui/react/lib/Styling';
import { TooltipHost } from '@fluentui/react';
import { FontIcon } from '@fluentui/react/lib/Icon';
import { formatDateTime } from './../../services/Utils';
import IAttestationSummary from "./../../interfaces/IAttestationSummary";
import IAttestationSummaryListProps from "./../../interfaces/IAttestationSummaryListProps";
import IAttestationSummaryListState from "./../../interfaces/IAttestationSummaryListState";

class AttestationSummaryList extends React.Component<IAttestationSummaryListProps> {
  constructor(props: IAttestationSummaryListProps) {    
    super(props);
    initializeIcons();

    this.setState( { attestions: this.props.attestations} );
  }

  private _selection:Selection = new Selection({
    onSelectionChanged: () => {
      if (this.props.onSelect === undefined) {
        return;
      }
      const selectedAttestations:IAttestationSummary[] = [];

      this._selection.getSelection().forEach(item => {
        selectedAttestations.push(item as IAttestationSummary);
      })

      this.props.onSelect(selectedAttestations);      
    }
  });;

  private _onColumnClick = (ev: React.MouseEvent<HTMLElement>, column: IColumn): void => {
    // const { columns, items } = this.state;
    // const newColumns: IColumn[] = columns.slice();
    // const currColumn: IColumn = newColumns.filter(currCol => column.key === currCol.key)[0];
    // newColumns.forEach((newCol: IColumn) => {
    //   if (newCol === currColumn) {
    //     currColumn.isSortedDescending = !currColumn.isSortedDescending;
    //     currColumn.isSorted = true;
    //     this.setState({
    //       announcedMessage: `${currColumn.name} is sorted ${
    //         currColumn.isSortedDescending ? 'descending' : 'ascending'
    //       }`,
    //     });
    //   } else {
    //     newCol.isSorted = false;
    //     newCol.isSortedDescending = true;
    //   }
    // });
    // const newItems = _copyAndSort(items, currColumn.fieldName!, currColumn.isSortedDescending);
    // this.setState({
    //   columns: newColumns,
    //   items: newItems,
    // });
  };
  
  render() {

    const iconClass = mergeStyles({
      fontSize: 16,
      height: 16,
      width: 16,      
    });    

    const classNames = mergeStyleSets({
      approved: [{ color: '#006400' }, iconClass],
      rejected: [{ color: '#ed1c24' }, iconClass],
      pending: [{ color: '#00008b' }, iconClass],
      fileIconHeaderIcon: {
        padding: 0,
        fontSize: '16px',
      },
      fileIconCell: {
        textAlign: 'center',
        selectors: {
          '&:before': {
            content: '.',
            display: 'inline-block',
            verticalAlign: 'middle',
            height: '100%',
            width: '0px',
            visibility: 'hidden',
          },
        },
      },
      fileIconImg: {
        verticalAlign: 'middle',
        maxHeight: '16px',
        maxWidth: '16px',
      },
      controlWrapper: {
        display: 'flex',
        flexWrap: 'wrap',
      },
      exampleToggle: {
        display: 'inline-block',
        marginBottom: '10px',
        marginRight: '30px',
      },
      selectionDetails: {
        marginBottom: '20px',
      },
    });
    const controlStyles = {
      root: {
        margin: '0 30px 20px 0',
        maxWidth: '300px',
      },
    };

    const columns: IColumn[] = [
      {
        key: 'attestationStatus',
        name: 'Status',
        className: classNames.fileIconCell,
        iconClassName: classNames.fileIconHeaderIcon,
        ariaLabel: 'Sort by Status',
        iconName: 'Page',
        isIconOnly: true,
        fieldName: 'attestationStatus',
        minWidth: 16,
        maxWidth: 16,
        onColumnClick: this._onColumnClick,
        onRender: (item: IAttestationSummary) => (
          <TooltipHost content={item.attestationStatus}>
            {
              item.attestationStatus === "Approved" &&
              <FontIcon aria-label={item.attestationStatus} iconName="Completed" className={classNames.approved} />
            }
            {
              item.attestationStatus === "Not Approved" &&
              <FontIcon aria-label={item.attestationStatus} iconName="ErrorBadge" className={classNames.rejected} />
            }
            {
              item.attestationStatus !== "Approved" && item.attestationStatus !== "Not Approved" &&
              <FontIcon aria-label={item.attestationStatus} iconName="StatusCircleQuestionMark" className={classNames.pending} />
            }
          </TooltipHost>
        ),
      },
      {
        key: 'attestationDateColumn',
        name: 'Submitted On',
        fieldName: 'attestationDate',
        minWidth: 70,
        maxWidth: 200,
        isRowHeader: true,
        isResizable: true,
        isSorted: true,
        isSortedDescending: true,
        sortAscendingAriaLabel: 'Sorted A to Z',
        sortDescendingAriaLabel: 'Sorted Z to A',
        onColumnClick: this._onColumnClick,
        data: 'string',
        isPadded: true,
        onRender: (item: IAttestationSummary) => ( formatDateTime(item.attestationDate) ),
      },
      {
        key: 'submittedForName',
        name: 'Submitted For',
        fieldName: 'submittedForName',
        minWidth: 200,
        maxWidth: 500,
        isResizable: true,
        onColumnClick: this._onColumnClick,
        data: 'string',
        // onRender: (item: IDocument) => {
        //   return <span>{item.dateModified}</span>;
        // },
        isPadded: true,
      },      
    ];

    return (           
      <DetailsList
        items={ this.props.attestations! }
        compact={false}
        columns={columns}
        selectionMode={this.props.selectionMode}
        //getKey={this._getKey}
        //setKey="multiple"
        layoutMode={DetailsListLayoutMode.justified}
        isHeaderVisible={true}
        selection={this._selection}
        selectionPreservedOnEmptyClick={true}
        //onItemInvoked={this._onItemInvoked}
        enterModalSelectionOnTouch={true}
        // ariaLabelForSelectionColumn="Toggle selection"
        // ariaLabelForSelectAllCheckbox="Toggle selection for all items"
        checkButtonAriaLabel="select attestation"
      />  
    );
  }
}

export default AttestationSummaryList;
