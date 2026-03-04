#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

class pulse_runtime_lib_CPulse_ResumePoint;
#include "pulse_runtime_lib_PulseDocNodeID_t.hpp"
#include "pulse_runtime_lib_CPulse_ResumePoint.hpp"

class pulse_runtime_lib_CPulseCell_CursorQueue {
    void **__vftable_0;
    pulse_runtime_lib_PulseDocNodeID_t m_nEditorNodeID;
    char end_pad_512[0x3c];
    int32_t m_nCursorsAllowedToWait;
    char pad_515[0x4];
    pulse_runtime_lib_CPulse_ResumePoint m_WaitComplete;
    int32_t m_nCursorsAllowedToRunParallel;
    char end_pad_514[0x4];
};
