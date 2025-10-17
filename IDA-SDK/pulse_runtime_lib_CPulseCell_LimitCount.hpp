#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "pulse_runtime_lib_PulseDocNodeID_t.hpp"

class pulse_runtime_lib_CPulseCell_LimitCount {
    char vTable501[0x8];
    pulse_runtime_lib_PulseDocNodeID_t m_nEditorNodeID;
    char end_pad_502[0x3c];
    int32_t m_nLimitCount;
    char end_pad_510[0x4];
};
