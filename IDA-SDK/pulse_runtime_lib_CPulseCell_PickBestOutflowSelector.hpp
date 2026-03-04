#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "pulse_runtime_lib_PulseDocNodeID_t.hpp"
#include "pulse_runtime_lib_PulseSelectorOutflowList_t.hpp"

class pulse_runtime_lib_CPulseCell_PickBestOutflowSelector {
    void **__vftable_0;
    pulse_runtime_lib_PulseDocNodeID_t m_nEditorNodeID;
    char end_pad_512[0x3c];
    pulse_runtime_lib_PulseBestOutflowRules_t m_nCheckType;
    char pad_523[0x4];
    pulse_runtime_lib_PulseSelectorOutflowList_t m_OutflowList;
};
