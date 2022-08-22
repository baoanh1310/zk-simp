import React, { useState, useEffect } from 'react';
import { Button, TextInput, View } from 'react-native';
import { Formik } from 'formik';

const InfoForm = props => (
    <Formik
        initialValues={{ name: ''}}
        onSubmit={ values => console.log(values)}
    >
        {({ handleChange, handleBlur, handleSubmit, values }) => (
            <View>
                <TextInput
                    onChangeText={handleChange('name')}
                    onBlur={handleBlur('name')}
                    value={values.name}
                />
                <Button onPress={handleSubmit} title="Generate QR Code" />
            </View>
        )}

    </Formik>
);

export default InfoForm;