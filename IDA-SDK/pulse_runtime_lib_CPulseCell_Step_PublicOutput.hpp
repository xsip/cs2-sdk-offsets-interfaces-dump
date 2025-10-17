#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "pulse_runtime_lib_PulseDocNodeID_t.hpp"
#include "pulse_runtime_lib_PulseRuntimeOutputIndex_t.hpp"

class pulse_runtime_lib_CPulseCell_Step_PublicOutput {
    char vTable501[0x8];
    pulse_runtime_lib_PulseDocNodeID_t m_nEditorNodeID;
    char end_pad_502[0x3c];
    pulse_runtime_lib_PulseRuntimeOutputIndex_t m_OutputIndex;
    char end_pad_514[0x4];
};
