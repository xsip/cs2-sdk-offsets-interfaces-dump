#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "PulseDocNodeID_t.hpp"
#include "CPulse_ResumePoint.hpp"
#include "PointCameraSettings_t.hpp"
#include "PointCameraSettings_t.hpp"

class CPulseCell_LerpCameraSettings {
    char _vtable_pad_493[0x8];
    PulseDocNodeID_t m_nEditorNodeID;
    char end_pad_494[0x3c];
    CPulse_ResumePoint m_WakeResume;
    float32 m_flSeconds;
    PointCameraSettings_t m_Start;
    PointCameraSettings_t m_End;
    char end_pad_492[0x4];
};
