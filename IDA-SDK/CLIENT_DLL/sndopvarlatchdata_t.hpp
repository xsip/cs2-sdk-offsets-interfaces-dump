#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class sndopvarlatchdata_t {
    char _vtable_pad_1117[0x8];
    CUtlSymbolLarge m_iszStack;
    CUtlSymbolLarge m_iszOperator;
    CUtlSymbolLarge m_iszOpvar;
    float32 m_flVal;
    Vector m_vPos;
};
