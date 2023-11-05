import openai

openai.api_key = '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'

parsedText = 'THIS SHOULD INPUT FROM THE Uploadimg.tsx FILE'

try:
    response = openai.Completion.create(
        engine="text-davinci-003",
        prompt="Can you split the following block of text into a json with a clearly labeled 'Question', 'Your Answer', and 'Correct Answer'. Please don't change the wording of any of these, you can make corrections if you believe the parser mis-scanned words. The text is {parsedText}",
        max_tokens=50
    )
    print(response.choices[0].text.strip())
except Exception as e:
    print(f"An error occurred: {e}")

