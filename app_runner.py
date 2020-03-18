from .services import app
from .configurations import DevelopmentConfig

app.config.from_object(DevelopmentConfig)

if __name__ == '__main__':
    app.run()