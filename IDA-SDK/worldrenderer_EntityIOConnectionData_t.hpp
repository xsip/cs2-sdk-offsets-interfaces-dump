#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class worldrenderer_EntityIOConnectionData_t {
    CUtlString m_outputName;
    uint32_t m_targetType;
    char pad_2481[0x4];
    CUtlString m_targetName;
    CUtlString m_inputName;
    CUtlString m_overrideParam;
    float32 m_flDelay;
    int32_t m_nTimesToFire;
    KeyValues3 m_paramMap;
};
