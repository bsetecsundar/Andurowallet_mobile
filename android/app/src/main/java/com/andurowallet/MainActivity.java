package com.andurowallet;

import com.reactnativenavigation.NavigationActivity;
import com.facebook.react.ReactActivityDelegate;
import com.facebook.react.defaults.DefaultNewArchitectureEntryPoint;
import com.facebook.react.defaults.DefaultReactActivityDelegate;
import android.os.Bundle; // here
import org.devio.rn.splashscreen.SplashScreen; // here

public class MainActivity extends NavigationActivity {


   protected void onCreate(Bundle savedInstanceState) {
        SplashScreen.show(this);  // here
        setTheme(R.style.AppTheme);

        super.onCreate(savedInstanceState);
    }

}
