#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "pulse_runtime_lib_PulseDocNodeID_t.hpp"
#include "pulse_runtime_lib_PulseSelectorOutflowList_t.hpp"

class smartprops_CSmartPropPulse_PickOneSelector {
    void **__vftable_0;
    pulse_runtime_lib_PulseDocNodeID_t m_nEditorNodeID;
    char end_pad_512[0x3c];
    smartprops_ConfigurationHandleShape_t m_HandleShape;
    char pad_2646[0x4];
    pulse_runtime_lib_PulseSelectorOutflowList_t m_OutflowList;
};
