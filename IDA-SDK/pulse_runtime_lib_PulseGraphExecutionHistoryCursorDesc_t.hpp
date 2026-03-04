#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "pulse_runtime_lib_PulseDocNodeID_t.hpp"
#include "pulse_runtime_lib_PulseDocNodeID_t.hpp"

class pulse_runtime_lib_PulseGraphExecutionHistoryCursorDesc_t {
    char vecAncestorCursorIDs[0x18];
    pulse_runtime_lib_PulseDocNodeID_t nSpawnNodeID;
    pulse_runtime_lib_PulseDocNodeID_t nRetiredAtNodeID;
    float32 flLastReferenced;
    int32_t nLastValidEntryIdx;
};
