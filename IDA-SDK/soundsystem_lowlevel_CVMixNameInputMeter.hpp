#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class soundsystem_lowlevel_CVMixNameInputMeter {
    CUtlString m_name;
    char end_pad_625[0x8];
    int32_t m_nValueIndex;
    char end_pad_645[0x4];
};
