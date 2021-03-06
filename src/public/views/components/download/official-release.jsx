'use strict';

import React from 'react';
import { strings } from '../../../lib/i18n';

export default React.createClass({

    render: function () {
        return (
            <div className='row service-wrapper-row'>
                <div className='col-sm-4'>
                    <div className='service-image'>
                        <img src='/img/download.svg' alt='download' />
                    </div>
                </div>
                <div className='col-sm-8'>
                    <p>
                        {strings().official.satoshi}
                        {' '}
                        {strings().official.supporting}
                    </p>
                    <br />
                    <div className='red'>
                        {strings().official.verify}
                        {' '}
                        {strings().official.signatures}
                    </div>
                    <h2 className='green'>{strings().official.release}</h2>
                    <h3>{strings().official.releasenotes}</h3>
                    {strings().official.releasenotes_1_0_1_3} {strings().official.release_note_text_1_0_1_3}
                    <br/><br />
                    {strings().official.releasenotes_1_0_1_2} {strings().official.prior_closed_source_release}
                    <br/><br/>
                    {strings().official.releasenotes_1_0_1_0} <a href='https://bitco.in/forum/threads/announcement-bitcoin-unlimited-general-release-1-0-0.1783/page-2#post-35605'>{strings().official.here}</a>
                    <br/>
                    {strings().official.releasenotes_1_0_0_0} <a href='https://github.com/BitcoinUnlimited/BitcoinUnlimited/blob/release/doc/release-notes/release-notes-1.0.0.md'>{strings().official.here}</a>
                    <h3>{strings().official.binary}</h3>
                    <br />
                    <h4>{strings().official.windows}</h4>
                    <p>{strings().official.bit64}: {strings().official.version}: 1.0.1.3, {strings().official.date}:
                      <a href='/downloads/bitcoinUnlimited-1.0.1.3-win64-setup.exe'> bitcoinUnlimited-1.0.1.3-win64-setup.exe</a>
                      <a href='https://github.com/BitcoinUnlimited/BitcoinUnlimitedWebDownloads/raw/master/bitcoinUnlimited-1.0.1.3-win64-setup.exe'> (mirror)</a>
                      <a href='/downloads/bitcoinUnlimited-1.0.1.3-win64.zip'> (zip)</a></p>
                    <p>{strings().official.bit32}: {strings().official.version}: 1.0.1.3, {strings().official.date}:
                      <a href='/downloads/bitcoinUnlimited-1.0.1.3-win32-setup.exe'> bitcoinUnlimited-1.0.1.3-win32-setup.exe</a>
                      <a href='https://github.com/BitcoinUnlimited/BitcoinUnlimitedWebDownloads/raw/master/bitcoinUnlimited-1.0.1.3-win32-setup.exe'> (mirror)</a>
                      <a href='/downloads/bitcoinUnlimited-1.0.1.3-win32.zip'> (zip)</a></p>
                    <br />
                    <h4>{strings().official.linux}</h4>
                    <p>{strings().official.bit64}: {strings().official.version}: 1.0.1.3, {strings().official.date}:
                      <a href='/downloads/bitcoinUnlimited-1.0.1.3-linux64.tar.gz'> bitcoinUnlimited-1.0.1.3-linux64.tar.gz</a>
                      <a href='https://github.com/BitcoinUnlimited/BitcoinUnlimitedWebDownloads/raw/master/bitcoinUnlimited-1.0.1.3-linux64.tar.gz'> (mirror)</a>
                    </p><p>{strings().official.bit32}: {strings().official.version}: 1.0.1.3, {strings().official.date}:
                      <a href='/downloads/bitcoinUnlimited-1.0.1.3-linux32.tar.gz'> bitcoinUnlimited-1.0.1.3-linux32.tar.gz</a>
                      <a href='https://github.com/BitcoinUnlimited/BitcoinUnlimitedWebDownloads/raw/master/bitcoinUnlimited-1.0.1.3-linux32.tar.gz'> (mirror)</a>
                    </p><br />
                    <h4>{strings().official.osx}</h4>
                    <p>{strings().official.bit64}: {strings().official.version}: 1.0.1.3, {strings().official.date}:
                      <a href='/downloads/bitcoinUnlimited-1.0.1.3-osx64.tar.gz'> bitcoinUnlimited-1.0.1.3-osx64.tar.gz</a>
                      <a href='https://github.com/BitcoinUnlimited/BitcoinUnlimitedWebDownloads/raw/master/bitcoinUnlimited-1.0.1.3-osx64.tar.gz'> (mirror)</a>                  
                    </p><p>{strings().official.bit32}: {strings().official.version}: 1.0.1.3, {strings().official.date}:
                      <a href='/downloads/bitcoinUnlimited-1.0.1.3-osx.tar.gz'> bitcoinUnlimited-1.0.1.3-osx.tar.gz</a>
                      <a href='https://github.com/BitcoinUnlimited/BitcoinUnlimitedWebDownloads/raw/master/bitcoinUnlimited-1.0.1.3-osx.tar.gz'> (mirror)</a>                  
                    </p><p>DMG: {strings().official.version}: 1.0.1.3, {strings().official.date}:
                      <a href='/downloads/bitcoinUnlimited-1.0.1.3-osx.dmg'> bitcoinUnlimited-1.0.1.3-osx.dmg</a>
                      <a href='https://github.com/BitcoinUnlimited/BitcoinUnlimitedWebDownloads/raw/master/bitcoinUnlimited-1.0.1.3-osx.dmg'> (mirror)</a>                  
                    </p><br />
                    <h4>{strings().official.ARM}</h4>
                    <p>{strings().official.bit64}: {strings().official.version}: 1.0.1.3, {strings().official.date}:
                      <a href='/downloads/bitcoinUnlimited-1.0.1.3-arm64.tar.gz'> bitcoinUnlimited-1.0.1.3-arm64.tar.gz</a>
                      <a href='https://github.com/BitcoinUnlimited/BitcoinUnlimitedWebDownloads/raw/master/bitcoinUnlimited-1.0.1.3-arm64.tar.gz'> (mirror)</a>                  
                    </p><p>{strings().official.bit32}: {strings().official.version}: 1.0.1.3, {strings().official.date}:
                      <a href='/downloads/bitcoinUnlimited-1.0.1.3-arm32.tar.gz'> bitcoinUnlimited-1.0.1.3-arm32.tar.gz</a>
                      <a href='https://github.com/BitcoinUnlimited/BitcoinUnlimitedWebDownloads/raw/master/bitcoinUnlimited-1.0.1.3-arm32.tar.gz'> (mirror)</a>                  
                    </p><br />

                    <h4>{strings().official.source}</h4>
                    <p>{strings().official.branch} <a href='https://github.com/BitcoinUnlimited/BitcoinUnlimited/tree/release'>{strings().official.here}</a></p>
                </div>
            </div>
        );
    }

});
