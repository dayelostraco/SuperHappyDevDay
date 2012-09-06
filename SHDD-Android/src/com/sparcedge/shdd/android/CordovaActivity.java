package com.sparcedge.shdd.android;

import android.os.Bundle;
import org.apache.cordova.DroidGap;

public class CordovaActivity extends DroidGap {

    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        super.loadUrl("file:///android_asset/www/jQueryMobileTemplate.html");
    }
}