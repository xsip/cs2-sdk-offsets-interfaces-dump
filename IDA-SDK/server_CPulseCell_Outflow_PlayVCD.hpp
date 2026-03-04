#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

class pulse_runtime_lib_CPulse_ResumePoint;
class pulse_runtime_lib_CPulse_OutflowConnection;
#include "pulse_runtime_lib_PulseDocNodeID_t.hpp"
#include "pulse_runtime_lib_CPulse_ResumePoint.hpp"
#include "pulse_runtime_lib_CPulse_ResumePoint.hpp"
#include "pulse_runtime_lib_CPulse_OutflowConnection.hpp"
#include "pulse_runtime_lib_CPulse_OutflowConnection.hpp"

class server_CPulseCell_Outflow_PlayVCD {
    void **__vftable_0;
    pulse_runtime_lib_PulseDocNodeID_t m_nEditorNodeID;
    char end_pad_512[0x3c];
    pulse_runtime_lib_CPulse_ResumePoint m_OnFinished;
    pulse_runtime_lib_CPulse_ResumePoint m_OnCanceled;
    char m_Triggers[0x18];
    char m_hChoreoScene[0x8];
    pulse_runtime_lib_CPulse_OutflowConnection m_OnPaused;
    pulse_runtime_lib_CPulse_OutflowConnection m_OnResumed;
};
