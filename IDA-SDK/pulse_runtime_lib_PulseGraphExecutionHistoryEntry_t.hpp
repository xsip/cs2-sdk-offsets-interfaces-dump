#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "pulse_runtime_lib_PulseCursorID_t.hpp"
#include "pulse_runtime_lib_PulseDocNodeID_t.hpp"

class pulse_runtime_lib_PulseGraphExecutionHistoryEntry_t {
    pulse_runtime_lib_PulseCursorID_t nCursorID;
    pulse_runtime_lib_PulseDocNodeID_t nEditorID;
    float32 flExecTime;
    uint32_t unFlags;
    PulseSymbol_t tagName;
};
