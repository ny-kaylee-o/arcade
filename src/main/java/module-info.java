module ch.noseryoung.arcade {
    requires javafx.controls;
    requires javafx.fxml;

    requires com.almasb.fxgl.all;

    opens ch.noseryoung.arcade to javafx.fxml;
    exports ch.noseryoung.arcade;
}