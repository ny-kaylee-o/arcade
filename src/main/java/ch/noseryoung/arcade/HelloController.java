package ch.noseryoung.arcade;

import javafx.application.Platform;
import javafx.fxml.FXML;

import java.util.logging.Logger;

public class HelloController {

    private static final Logger LOGGER = Logger.getLogger(HelloController.class.getName());

    @FXML
    private void onPlayClicked() {
        new Thread(HelloApplication::startGame).start();
    }

    @FXML
    private void onOptionsClicked() {
        // Hook up an options screen/dialog here later
        LOGGER.info("Options clicked");
    }

    @FXML
    private void onExitClicked() {
        Platform.exit();
        System.exit(0);
    }
}