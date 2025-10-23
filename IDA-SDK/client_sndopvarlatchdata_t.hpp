#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class client_sndopvarlatchdata_t {
    char vTable1678[0x8];
    CUtlSymbolLarge m_iszStack;
    CUtlSymbolLarge m_iszOperator;
    CUtlSymbolLarge m_iszOpvar;
    float32 m_flVal;
    Vector m_vPos;
};
