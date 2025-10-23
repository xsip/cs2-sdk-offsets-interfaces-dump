#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

class pulse_runtime_lib_CPulse_ResumePoint;
#include "pulse_runtime_lib_PulseDocNodeID_t.hpp"
#include "pulse_runtime_lib_CPulse_ResumePoint.hpp"

class server_CPulseCell_Outflow_ListenForAnimgraphTag {
    char vTable501[0x8];
    pulse_runtime_lib_PulseDocNodeID_t m_nEditorNodeID;
    char end_pad_502[0x3c];
    pulse_runtime_lib_CPulse_ResumePoint m_OnStart;
    pulse_runtime_lib_CPulse_ResumePoint m_OnEnd;
    pulse_runtime_lib_CPulse_ResumePoint m_OnCanceled;
    CGlobalSymbol m_TagName;
};
