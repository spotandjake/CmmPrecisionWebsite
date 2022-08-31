/*
Copyright 2020 Adobe
All Rights Reserved.

NOTICE: Adobe permits you to use, modify, and distribute this file in
accordance with the terms of the Adobe license agreement accompanying
it. If you have received this file from a source other than Adobe,
then your use, modification, or distribution of it requires the prior
written permission of Adobe.
*/
class ViewSDKClient {
  private fileLocation: string;
  private fileName: string;
  private fileID: string;
  private readyPromise: Promise<void>;
  private adobeDCView: undefined | any;
  constructor(fileLocation: string, fileName: string, fileID: string) {
    this.fileLocation = fileLocation;
    this.fileName = fileName;
    this.fileID = fileID;
    this.readyPromise = new Promise((resolve) => {
      //@ts-ignore
      if (window.AdobeDC) {
        resolve();
      } else {
        /* Wait for Adobe Document Services PDF Embed API to be ready */
        document.addEventListener('adobe_dc_view_sdk.ready', () => {
          resolve();
        });
      }
    });
    this.adobeDCView = undefined;
  }

  ready() {
    return this.readyPromise;
  }

  previewFile(divId: string, viewerConfig: any) {
    const config: { clientId: string, divId?: string } = {
      /* Pass your registered client id */
      clientId: 'afe0d1bca02849e9b6bf11e193c88508',
    };
    if (divId) {
      /* Optional only for Light Box embed mode */
      /* Pass the div id in which PDF should be rendered */
      config.divId = divId;
    }
    /* Initialize the AdobeDC View object */
    //@ts-ignore
    this.adobeDCView = new window.AdobeDC.View(config);
    /* Invoke the file preview API on Adobe DC View object */
    const previewFilePromise = this.adobeDCView.previewFile(
      {
        /* Pass information on how to access the file */
        content: {
          /* Location of file where it is hosted */
          location: {
            url: this.fileLocation,
            /*
                  If the file URL requires some additional headers, then it can be passed as follows:-
                  headers: [
                      {
                          key: "<HEADER_KEY>",
                          value: "<HEADER_VALUE>",
                      }
                  ]
                  */
          },
        },
        /* Pass meta data of file */
        metaData: {
          /* file name */
          fileName: this.fileName,
          /* file ID */
          id: this.fileID,
        },
      },
      viewerConfig
    );

    return previewFilePromise;
  }

  previewFileUsingFilePromise(divId: string, filePromise: any, fileName: string) {
    /* Initialize the AdobeDC View object */
    //@ts-ignore
    this.adobeDCView = new window.AdobeDC.View({
      /* Pass your registered client id */
      clientId: 'afe0d1bca02849e9b6bf11e193c88508',
      /* Pass the div id in which PDF should be rendered */
      divId,
    });

    /* Invoke the file preview API on Adobe DC View object */
    this.adobeDCView.previewFile(
      {
        /* Pass information on how to access the file */
        content: {
          /* pass file promise which resolve to arrayBuffer */
          promise: filePromise,
        },
        /* Pass meta data of file */
        metaData: {
          /* file name */
          fileName: fileName,
        },
      },
      {}
    );
  }

  registerSaveApiHandler() {
    /* Define Save API Handler */
    const saveApiHandler = (metaData: any, content: any, options: any): any => {
      return new Promise((resolve) => {
        /* Dummy implementation of Save API, replace with your business logic */
        setTimeout(() => {
          const response = {
            //@ts-ignore
            code: window.AdobeDC.View.Enum.ApiResponseCode.SUCCESS,
            data: {
              metaData: Object.assign(metaData, {
                updatedAt: new Date().getTime(),
              }),
            },
          };
          resolve(response);
        }, 2000);
      });
    };

    this.adobeDCView.registerCallback(
      //@ts-ignore
      window.AdobeDC.View.Enum.CallbackType.SAVE_API,
      saveApiHandler,
      {}
    );
  }

  registerEventsHandler() {
    /* Register the callback to receive the events */
    this.adobeDCView.registerCallback(
      /* Type of call back */
      //@ts-ignore
      window.AdobeDC.View.Enum.CallbackType.EVENT_LISTENER,
      /* call back function */
      (event: any) => {
        console.log(event);
      },
      /* options to control the callback execution */
      {
        /* Enable PDF analytics events on user interaction. */
        enablePDFAnalytics: true,
      }
    );
  }
}

export default ViewSDKClient;
