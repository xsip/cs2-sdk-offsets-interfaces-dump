#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class CPrecipitationVData {
    char pad_196[0x28];
    char m_szParticlePrecipitationEffect[0xe0];
    float32 m_flInnerDistance;
    ParticleAttachment_t m_nAttachType;
    bool m_bBatchSameVolumeType;
    char pad_487[0x3];
    int32_t m_nRTEnvCP;
    int32_t m_nRTEnvCPComponent;
    char pad_488[0x4];
    CUtlString m_szModifier;
};
