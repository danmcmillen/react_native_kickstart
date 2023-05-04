import TodoList from '../components/TodoList';
import React from 'react';
import StyledText from '../../../core/components/elements/StyledText';
import { KeyboardAvoidingView, Platform, StyleSheet, View } from 'react-native';
import { spacing } from '../../../core/theme/themes';
import AddTodoItem from '../components/AddTodoItem';

const TodoListScreen = () => {
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <View style={styles.title}>
        <StyledText name={'Today'} type={'h1'} />
      </View>
      <TodoList />
      <AddTodoItem />
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'space-between',
  },
  title: {
    paddingBottom: spacing.large,
  },
});

export default TodoListScreen;
