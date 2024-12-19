import pandas as panda
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import accuracy_score

dataFromCsvFile = panda.read_csv('')

dataFromCsvFile = panda.get_dummies(dataFromCsvFile, columns=['job', 'married', 'education', 'communication', 'prevOutcome'], drop_first=True)

xData = dataFromCsvFile.drop(columns=['success'])
yData = dataFromCsvFile['success']

trainedDataX, trainedTestX, trainedDataY, trainedTestY = train_test_split(xData, yData, test_size=0.25, random_state=42)

logModel = LogisticRegression(max_iter=10000)
logModel.fit(trainedDataX, trainedDataY)

predictedDataY = logModel.predict(trainedTestX)
dataAccuracyScore = accuracy_score(trainedTestY, predictedDataY)
print('Accuracy Score: ',dataAccuracyScore)

finalProbabillity = logModel.predict_proba(trainedTestX)

dataOfClientsGreaterThan90 = (finalProbabillity[:, 1] > 0.9).sum()
print('Number of clients with > 90% probability of buying car insurance:',dataOfClientsGreaterThan90)

dataOfClientsLessThan90 = (finalProbabillity[:, 1] < 0.1).sum()
print('Number of clients with < 10% probability of buying car insurance:', dataOfClientsLessThan90)
