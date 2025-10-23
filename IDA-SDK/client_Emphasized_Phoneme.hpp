#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class client_Emphasized_Phoneme {
    CUtlString m_sClassName;
    char pad_1201[0x10];
    float32 m_flAmount;
    bool m_bRequired;
    bool m_bBasechecked;
    bool m_bValid;
    char end_pad_1202[0x1];
};
