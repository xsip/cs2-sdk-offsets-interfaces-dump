#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "entity2_GameTime_t.hpp"

class server_VelocitySampler {
    Vector m_prevSample;
    entity2_GameTime_t m_fPrevSampleTime;
    float32 m_fIdealSampleRate;
};
