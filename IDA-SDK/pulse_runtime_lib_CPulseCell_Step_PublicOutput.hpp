#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "pulse_runtime_lib_PulseDocNodeID_t.hpp"
#include "pulse_runtime_lib_PulseRuntimeOutputIndex_t.hpp"

class pulse_runtime_lib_CPulseCell_Step_PublicOutput {
    void **__vftable_0;
    pulse_runtime_lib_PulseDocNodeID_t m_nEditorNodeID;
    char end_pad_512[0x3c];
    pulse_runtime_lib_PulseRuntimeOutputIndex_t m_OutputIndex;
    char end_pad_524[0x4];
};
