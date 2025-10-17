#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class client_CFlashlightEffect {
    char vTable926[0x10];
    bool m_bIsOn;
    char pad_927[0xf];
    bool m_bMuzzleFlashEnabled;
    char pad_928[0x3];
    float32 m_flMuzzleFlashBrightness;
    char pad_929[0x8];
    Quaternion m_quatMuzzleFlashOrientation;
    Vector m_vecMuzzleFlashOrigin;
    float32 m_flFov;
    float32 m_flFarZ;
    float32 m_flLinearAtten;
    bool m_bCastsShadows;
    char pad_930[0x3];
    float32 m_flCurrentPullBackDist;
    char m_FlashlightTexture[0x8];
    char m_MuzzleFlashTexture[0x8];
    char m_textureName[64];
    char end_pad_931[0x230];
};
