#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class mathlib_extended_CFuseProgram {
    char m_programBuffer[0x18];
    char m_variablesRead[0x18];
    char m_variablesWritten[0x18];
    int32_t m_nMaxTempVarsUsed;
    char end_pad_2596[0x4];
};
