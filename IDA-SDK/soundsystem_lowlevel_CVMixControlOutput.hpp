#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class soundsystem_lowlevel_CVMixControlOutput {
    CUtlString m_name;
    char end_pad_625[0x8];
    float32 m_flDefaultValue;
    char end_pad_628[0x4];
};
