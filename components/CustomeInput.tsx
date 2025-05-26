import React from 'react'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Control, Field, FieldPath } from 'react-hook-form';
import { authFormSchema } from '@/validation/formshema';
import z from 'zod';
interface CustomeInputProps {
  controller: Control <z.infer<typeof authFormSchema>>;
  name: FieldPath<z.infer<typeof authFormSchema>>;
  type: string;
  label: string;
  placeholder: string;
}

const CustomeInput = ({controller,name,type,label,placeholder}:CustomeInputProps) => {
  return (
    <FormField
    control={controller}
    name={name}
    render={({ field }) => (
      <div className="form-item">
        <FormLabel className={label}>Email</FormLabel>
        <div className="flex w-full flex-col">
          <FormControl>
            <Input
              placeholder={placeholder}
              {...field}
              className="input-class"
              type={type}
            />
          </FormControl>
          <FormMessage
          className="form-message mt-2" />

        </div>
      </div>
    )}
  />
  )
}

export default CustomeInput
