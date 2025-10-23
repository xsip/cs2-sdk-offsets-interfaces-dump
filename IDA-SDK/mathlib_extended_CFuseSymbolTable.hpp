#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class mathlib_extended_CFuseSymbolTable {
    char m_constants[0x18];
    char m_variables[0x18];
    char m_functions[0x18];
    char m_constantMap[0x20];
    char m_variableMap[0x20];
    char m_functionMap[0x20];
    char end_pad_2596[0x8];
};
