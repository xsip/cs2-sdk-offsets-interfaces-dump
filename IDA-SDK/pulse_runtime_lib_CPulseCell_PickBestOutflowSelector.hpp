#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "pulse_runtime_lib_PulseDocNodeID_t.hpp"
#include "pulse_runtime_lib_PulseSelectorOutflowList_t.hpp"

class pulse_runtime_lib_CPulseCell_PickBestOutflowSelector {
    char vTable501[0x8];
    pulse_runtime_lib_PulseDocNodeID_t m_nEditorNodeID;
    char end_pad_502[0x3c];
    pulse_runtime_lib_PulseBestOutflowRules_t m_nCheckType;
    char pad_512[0x4];
    pulse_runtime_lib_PulseSelectorOutflowList_t m_OutflowList;
};
