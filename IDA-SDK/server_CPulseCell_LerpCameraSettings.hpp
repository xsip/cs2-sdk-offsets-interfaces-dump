#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

class pulse_runtime_lib_CPulse_ResumePoint;
#include "pulse_runtime_lib_PulseDocNodeID_t.hpp"
#include "pulse_runtime_lib_CPulse_ResumePoint.hpp"
#include "client_PointCameraSettings_t.hpp"
#include "client_PointCameraSettings_t.hpp"

class server_CPulseCell_LerpCameraSettings {
    char vTable501[0x8];
    pulse_runtime_lib_PulseDocNodeID_t m_nEditorNodeID;
    char end_pad_502[0x3c];
    pulse_runtime_lib_CPulse_ResumePoint m_WakeResume;
    float32 m_flSeconds;
    client_PointCameraSettings_t m_Start;
    client_PointCameraSettings_t m_End;
    char end_pad_3956[0x4];
};
