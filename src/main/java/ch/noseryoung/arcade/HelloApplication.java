package ch.noseryoung.arcade;

import com.almasb.fxgl.app.GameApplication;
import com.almasb.fxgl.app.GameSettings;
import javafx.application.Application;
import javafx.fxml.FXMLLoader;
import javafx.scene.Parent;
import javafx.scene.Scene;
import javafx.stage.Stage;

public class HelloApplication extends Application {

    @Override
    public void start(Stage stage) throws Exception {
        FXMLLoader loader = new FXMLLoader(
                HelloApplication.class.getResource("hello-view.fxml"));
        Parent root = loader.load();

        Scene scene = new Scene(root);

        stage.setTitle("My Arcade Game");
        stage.setScene(scene);
        stage.sizeToScene();
        stage.show();
    }

    public static void startGame() {
        new Thread(() -> GameApp.main(new String[0])).start();
    }

    private static class GameApp extends GameApplication {

        @Override
        protected void initSettings(GameSettings settings) {
            settings.setWidth(960);
            settings.setHeight(540);
            settings.setTitle("My Arcade Game");
            settings.setVersion("0.1");
            settings.setMainMenuEnabled(false);
            settings.setGameMenuEnabled(true);
        }

        @Override
        protected void initGame() {
            // Add gameplay setup here.
        }

        public static void main(String[] args) {
            launch(args);
        }
    }
}