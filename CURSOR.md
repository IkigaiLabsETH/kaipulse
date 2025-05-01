# Cursor Best Practices

This guide outlines best practices for effectively using Cursor to manage project complexity and maximize productivity.

## Initial Setup and Planning

1. **Start with a Clear Plan**
   - Before using Cursor, ask Claude to create a detailed plan in markdown
   - Request clarifying questions and plan critique
   - Add the plan to `instructions.md` for future reference

2. **Use ChatGPT for Additional Planning**
   - Tell ChatGPT what you want to create
   - Ask it to provide instructions for another AI to do the coding
   - Paste everything into the Cursor composer agent
   - This extra planning layer helps reduce potential issues

## Development Workflow

1. **Use Cursor Rules**
   - Cursor rules are always available in AI context
   - Reference them at https://cursor.directory/
   - Example: Write tests first, then code, then run tests and update until passing

2. **Implement Code Incrementally**
   - Define small task/feature increments
   - Write (or have AI write) failing test cases
   - Instruct AI to write code to make tests pass
   - Run tests
   - If tests fail, AI analyzes and fixes code
   - Developer reviews changes after tests pass

3. **Version Control Best Practices**
   - Use git frequently
   - Avoid accumulating too many uncommitted changes
   - Use `.cursorignore` to exclude irrelevant files

## Context Management

1. **Keep Context Focused**
   - Keep context short by explicitly adding files with @
   - Longer context can reduce AI effectiveness
   - Start new chats when context gets too long
   - Resync/index code frequently

2. **Reference Management**
   - Use /Reference to quickly add editors to context
   - Notepads are frequently used for prompts
   - Use gitingest.com to get all relevant files in one page

## Documentation and Resources

1. **External Resources**
   - Use https://context7.com/ for MCP documentation reference
   - Reference https://cursor.directory/ for cursor rules

## Testing

1. **Testing Approach**
   - Optional: Enable YOLO mode for test writing
   - All test types are supported (vitest, npm test, nr test, etc.)
   - Basic build commands are always allowed
   - File operations (touch, mkdir, etc.) are permitted

## AI Interaction Guidelines

1. **System Prompt Rules**
   - Keep answers concise and direct
   - Suggest alternative solutions
   - Avoid unnecessary explanations
   - Prioritize technical details over generic advice

2. **Problem Resolution**
   - When encountering issues, ask Cursor to write a report
   - List all relevant files and their purposes
   - Document problems encountered
   - Consult Claude/ChatGPT for problem-solving

## Troubleshooting
If Cursor encounters issues:
1. Start fresh with a clear plan
2. Ask ChatGPT to write clear instructions
3. Follow the Edit-Test loop pattern
4. Maintain smaller, focused contexts 